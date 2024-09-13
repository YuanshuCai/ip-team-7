import './ChannelPage.scss';
import {useParams} from "react-router-dom";
import channelData from "../../assets/data/channels.json";
import categories from "../../assets/data/channel_category.json";
import ChannelCardsList from "../../components/ChannelCardsList/ChannelCardsList.jsx";
import CategoriesDropDown from "../../components/CategoriesDropDown/CategoriesDropDown.jsx";
import {useEffect, useState} from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";


const ChannelsPage = ({ }) => {
    const [currentCategory, setCurrentCategory] = useState(useParams().id ? useParams().id : categories[1].id )
    const [currentChannels, setCurrentChannels] = useState();

    useEffect(() => {
        setCurrentChannels(channelData.filter((channel) =>
            channel.category.includes(parseInt(currentCategory))))
    }, [currentCategory]);

    return (
        <div className="channels-page">
            <div className="top-bar">
                <CategoriesDropDown categories={categories} setCategoryId={setCurrentCategory} />
                <SearchBar />
            </div>
            <ChannelCardsList channels={currentChannels} />
        </div>
    );
};

export default ChannelsPage;