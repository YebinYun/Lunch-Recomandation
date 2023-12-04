import instance from "./apiConfig";
import Error from "./apiErrorHandling";

const getSearch = {
    get: async (endpoints) => {
        try {
            const responses = await Promise.all(
                endpoints.map(async (endpoint) => {
                    const response = await instance.get(endpoint.url, {
                        params: {
                            query: endpoint.keyword,
                            display: endpoint.num,
                        },
                    });
                    return response.data;
                })
            );

            return responses;
        } catch (error) {
            Error(error);
        }
    },
};

export default getSearch;
