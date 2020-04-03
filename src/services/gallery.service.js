import http from "../core/httpClient";

class GalleryService {

    static instance;

    constructor() {
        if (!GalleryService.instance)
            GalleryService.instance = this;

        return GalleryService.instance;
    }

    getGallery = async request => {

        try {
            const response = await http.get(`${ORDER_SERVICE}/order-service/consumers/1654/${request.consumerMobilePhone}`);
            return response.data;
        } catch (error) {
            throw (error.response || error.message);
        }
    }

    getImage = async request => {
        try {
            const response = await http.get(`${ORDER_SERVICE}/order-service/get-orders/${request.id}`);
            return response.data;
        } catch (error) {
            throw (error.response || error.message);
        }
    }

}

const instance = new GalleryService();
Object.freeze(instance);

export default instance;
