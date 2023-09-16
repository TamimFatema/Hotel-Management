import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: false,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        breakfast: true
    };

    componentDidMount() {
        // this.getData();
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        //
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        });
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
const RoomGuest = RoomContext.Consumer;

export { RoomProvider, RoomContext, RoomGuest }

export function withRoomGuest(Component) {

    return function GuestWrapper(props) {
        return (
            <RoomGuest>
                {value => <Component {...props} context={value} />}
            </RoomGuest>
        )
    }
}

