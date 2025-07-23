import { useEffect, useState } from 'react';
import { ProjectType } from '../types/projectTypes';
import { API_URL } from '../constants/API_URL';
import axios, { AxiosResponse } from 'axios';

const useFetchProjects = () => {
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [isProjectError, setIsProjectError] = useState(false);

    useEffect(() => {
        const fetchLatestProjects = async () => {
            try {
                const res: AxiosResponse<{ status: string; projects: ProjectType[] }> =
                    await axios.get(`${API_URL}/my/projects/latest`);
                if (res.data.status === 'success') {
                    setProjects(res.data.projects);
                }
            } catch (_err) {
                setIsProjectError(true);
            }
        };
        fetchLatestProjects();
    }, []);

    return {
        projects,
        isProjectError,
    };
};

export default useFetchProjects;
