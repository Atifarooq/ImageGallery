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
            const { section, sort, window } = request;
            const response = await http.get(`https://api.imgur.com/3/gallery/${section}/${sort}/${window}/1?showViral=true&mature=true&album_previews=true`);
            return response.data.data;
        } catch (error) {
            throw (error.response || error.message);
        }
    }

    getImageById = async id => {
        try {
            const response = await http.get(`https://api.imgur.com/3/gallery/album/${id}`);
            return response.data.data;
        } catch (error) {
            throw (error.response || error.message);
        }
    }

}

const instance = new GalleryService();
Object.freeze(instance);

export default instance;
