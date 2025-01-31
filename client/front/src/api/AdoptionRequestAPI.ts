import axios, { AxiosResponse } from 'axios';

require('dotenv').config();

const baseUrl: string | undefined = 'http://localhost:4000';

export const getAdoptionRequests = async (): Promise<AxiosResponse<AdoptionRequestApiDataType>> => {
    try {
        const adoptionRequests: AxiosResponse<AdoptionRequestApiDataType> = await axios.get(`${baseUrl}/adoptionRequests`);
        console.log(`adoption requests: ${JSON.stringify(adoptionRequests)}`);

        return adoptionRequests;
    } catch (error) {
        throw new Error(error);
    }
};



export const getAdoptionRequest = async (
    adoptionRequestId: string
): Promise<AxiosResponse<AdoptionRequestApiDataType>> => {
    try {
        const requestedAdoptionRequest: AxiosResponse<AdoptionRequestApiDataType> = await axios.get(
            `${baseUrl}/adoptionRequests/${adoptionRequestId}`
        );
        return requestedAdoptionRequest;
    } catch (error) {
        throw new Error(error);
    }
};

export const addAdoptionRequest = async (
    formData: IAdoptionRequest | any, petId: string | undefined
): Promise<AxiosResponse<AdoptionRequestApiDataType>> => {
    if (petId === undefined) {
        throw new Error();
    }
    try {
        const adoptionRequest: Omit<IAdoptionRequest, '_id'> = {
            petId: petId,
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            address: formData.address,
            message: formData.message,
        };
        console.log(`adoptionRequest: ${Object.keys(adoptionRequest)}\n ${Object.values(adoptionRequest)}`);

        const saveAdoptionRequest: AxiosResponse<AdoptionRequestApiDataType> = await axios.post(
            `${baseUrl}/adoptionRequests`,
            adoptionRequest
        );
        return saveAdoptionRequest;
    } catch (error) {
        throw new Error(`Failed to addAdoptionRequest, ${error}`);
    }
};