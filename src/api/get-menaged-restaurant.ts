import { api } from "@/lib/axios";

interface GetManagedRestaurantResponse {
    id: string;
    name: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    description: string | null;
    managerId: string | null;
}

export async function getManagedRestaurantResponse() {
    const res = await api.get<GetManagedRestaurantResponse>('/managed-restaurant')

    return res.data
}