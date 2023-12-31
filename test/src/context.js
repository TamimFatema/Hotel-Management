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
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,

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
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        console.log(name, value);

        this.setState(
            {
                [name]: value
            },
            this.filterRooms
        );
    };
    filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            breakfast,

        } = this.state;

        let tempRooms = [...rooms];

        capacity = parseInt(capacity);
        price = parseInt(price);
        // filter by type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }
        // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);
        //filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        this.setState({
            sortedRooms: tempRooms
        });
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