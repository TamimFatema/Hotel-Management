import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: false
    };

    componentDidMount() {
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms, featuredRooms, sortedRooms: rooms, loading: false
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image =>
                image.fields.file.url);

            let room = { ...item.fields, images, id }
            return room;
        });
        return tempItems;
    }
    getRoom = (roomID) => {
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.roomID === roomID);
        return room;
    };
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
                {this.props.children}
            </RoomContext.Provider>);
    }
}

const RoomGuest = RoomContext.Guest;

export { RoomProvider, RoomContext, RoomGuest }