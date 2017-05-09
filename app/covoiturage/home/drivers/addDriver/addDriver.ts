import DriverModel from "../../components/driver/DriverModel";
import UserService from "../../services/UserService";

const template: string = `
    <div layout="row">
        <driver flex
             on-address-selected="$ctrl.addMarker(item)"
             on-add="$ctrl.addDriver(driver)"
        ></driver>
        <covoiturage-map markers="$ctrl.markers" flex></covoiturage-map>
    </div>
`;

export default class AddDriver {
    public static readonly selector: string = 'addDriver';
    public static readonly component: Object = {
        template,
        controller: AddDriver
    };

    private markers:Array<Object> = [];
    private userService:UserService;

    public static $inject = [UserService.servicename];
    constructor(userService:UserService) {
        this.userService = userService;
    }

    addMarker(item): void {
        this.markers.push(item);
        this.markers = this.markers.map((item) => item);
    }

    addDriver(driver:DriverModel):void{
        this.userService.drivers.push(driver);
    }
}
