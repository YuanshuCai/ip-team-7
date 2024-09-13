import './ChannelPage.scss';
import {useParams} from "react-router-dom";
import channelData from "../../assets/data/channels.json";
import categories from "../../assets/data/channel_category.json";
import ChannelCardsList from "../../components/ChannelCardsList/ChannelCardsList.jsx";
import CategoriesDropDown from "../../components/CategoriesDropDown/CategoriesDropDown.jsx";
import {useEffect, useState} from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import ShowsModal from "../../components/ShowsModal/ShowsModal.jsx";


const ChannelsPage = ({ searchResults, setSearchResults }) => {
    const [currentCategory, setCurrentCategory] = useState(useParams().id ? useParams().id : categories[1].id )
    const [currentChannels, setCurrentChannels] = useState();
    const [currentChannelName, setCurrentChannelName] = useState("");
    const [currentChannelId, setCurrentChannelId] = useState();
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {setModalOpen(false)}
    const openModal = () => {setModalOpen(true)}

    useEffect(() => {
        if (searchResults.length > 0) {
            console.log("ace")
            setCurrentChannels(channelData.filter((channel) =>
                searchResults.find( (result) => result.channel.includes(channel.id))))
            return;
        }

        setCurrentChannels(channelData.filter((channel) =>
            channel.category.includes(parseInt(currentCategory))))
    }, [currentCategory, searchResults]);

    return (
        <div className="channels-page">
            <div className="top-bar">
                <CategoriesDropDown categories={categories} setCategoryId={setCurrentCategory} />
                <SearchBar setResults={setSearchResults} />
            </div>
            <ChannelCardsList openModal={openModal} setCurrentId={setCurrentChannelId} setCurrentName={setCurrentChannelName} channels={currentChannels} />
            <ShowsModal isOpen={modalOpen} onClose={openModal} channelId={currentChannelId} channelName={currentChannelName} />
        </div>
    );
};

export default ChannelsPage;