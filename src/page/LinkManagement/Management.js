import React from 'react';
import LinkDisplay from "../../components/LinkDisplay/LinkDisplay";
import "./Management.css";
import ManagementPannel from "./ManagementPanel";
import {useAxios} from "../../context/AxiosContext";
import {useLink} from "../../context/LinkContext";

const Management = () => {
    const {axiosInstance} = useAxios();
    const { setLinks } = useLink();

    const updateLink = async (updatedLink) => {
        console.log(updatedLink);
        const response = await axiosInstance.put(`/api/link`,updatedLink);
        const updatedData = response.data;
        setLinks(prevLinks =>
            prevLinks.map(link =>
                // 최신 데이터로 갱신
                link.id === updatedData.id ? updatedData : link
            )
        );
    };

    return (
        <div className="management-container">
            <ManagementPannel
                updateLink={updateLink}
            />

            {/* 디스플레이 패널 */}
            <div className="display-panel">
                <LinkDisplay/>
            </div>
        </div>
    )

};
export default Management;

