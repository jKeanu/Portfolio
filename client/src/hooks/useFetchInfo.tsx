import { useEffect, useState } from 'react';
import { myInfo } from '../types/myInfoTypes';
import { API_URL } from '../constants/API_URL';
import axios, { AxiosResponse } from 'axios';

const useFetchInfo = () => {
    const [aboutMe, setAboutMe] = useState<myInfo | null>(null);
    const [isInfoError, setIsInfoError] = useState(false);

    useEffect(() => {
        const fetchMyInfo = async () => {
            try {
                const res: AxiosResponse<{ status: string; details: myInfo }> = await axios.get(
                    `${API_URL}/my/info`
                );
                if (res.data.status === 'success') {
                    setAboutMe(res.data.details);
                }
            } catch (_err) {
                setIsInfoError(true);
            }
        };
        fetchMyInfo();
    }, []);

    return {
        aboutMe,
        isInfoError,
    };
};

export default useFetchInfo;
