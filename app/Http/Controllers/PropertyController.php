<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PropertyRequest;
use App\Http\Requests\SearchPropertyRequest;
use App\Http\Resources\PropertyResource;
use App\Models\Property;
use App\Services\PropertyService;
use Illuminate\Http\JsonResponse;

class PropertyController extends Controller
{
    protected PropertyService $propertyService;

    public function __construct(PropertyService $propertyService)
    {
        $this->propertyService = $propertyService;
    }

    public function index(SearchPropertyRequest $request): JsonResponse
    {
        $properties = $this->propertyService->searchProperties(
            $request->validated(),
            $request->get('per_page', 10)
        );

        return response()->json([
            'data' => PropertyResource::collection($properties),
            'meta' => [
                'current_page' => $properties->currentPage(),
                'last_page' => $properties->lastPage(),
                'per_page' => $properties->perPage(),
                'total' => $properties->total(),
            ],
        ]);
    }

    public function store(PropertyRequest $request): JsonResponse
    {
        $this->authorize('create', Property::class);

        $property = $this->propertyService->createProperty($request->validated());

        return response()->json([
            'message' => 'Property created successfully',
            'data' => new PropertyResource($property),
        ], 201);
    }

    public function show(Property $property): JsonResponse
    {
        return response()->json([
            'data' => new PropertyResource($property->load(['city', 'availability'])),
        ]);
    }

    public function update(PropertyRequest $request, Property $property): JsonResponse
    {
        $this->authorize('update', $property);

        $property = $this->propertyService->updateProperty($property, $request->validated());

        return response()->json([
            'message' => 'Property updated successfully',
            'data' => new PropertyResource($property),
        ]);
    }

    public function destroy(Property $property): JsonResponse
    {
        $this->authorize('delete', $property);

        $this->propertyService->deleteProperty($property);

        return response()->json([
            'message' => 'Property deleted successfully',
        ]);
    }

    public function checkAvailability(Property $property, SearchPropertyRequest $request): JsonResponse
    {
        $validated = $request->validated();

        $isAvailable = $this->propertyService->checkAvailability(
            $property,
            $validated['start_date'],
            $validated['end_date']
        );

        return response()->json([
            'available' => $isAvailable,
            'property_id' => $property->id,
            'start_date' => $validated['start_date'],
            'end_date' => $validated['end_date'],
        ]);
    }
}
