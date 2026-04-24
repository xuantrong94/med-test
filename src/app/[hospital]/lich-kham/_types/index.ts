export type BookingTreeChild = BookingTreeBase & {
  detail?: BookingTreeDetail;
  child: BookingTreeChild[];
};
export type BookingTreeDetail = {
  name: string;
  id: string;
  type: string;
  displayDetail: string;
  description?: string;
  serviceType: string;
  serviceGroup: string;
  price: number;
  advance: number;
  rooms: BookingTreeRoom[];
  bookingNote: string;
  nextCombine: boolean;
  days: string;
  displaySchedule: string;
  groupList?: string[];
  bookingGroupName: string;
  maxDay?: number;
  popupType: number;
  popupTitle: string;
  popupContent: string;
  addonServices: any[];
  infoLine2?: string;
  originalPrice?: number;
  priceDescription: string;
  requiredCheckInsurance: boolean;
};

type RoomInfo = {
  name: string;
  id: string;
  type: string;
  roomType: string;
  description: string;
  room?: string;
  bookingNote: string;
  nextCombine: boolean;
  combineNodes: string[];
  maxDay?: number;
  image_url?: string;
};

type BookingTreeRoom = {
  insuranceType: string;
  room: RoomInfo;
};
export type BookingTreeDynamic = BookingTreeBase & {
  child: BookingTreeChild[];
  detail?: BookingTreeDetail[];
};

type BookingTreeBase = {
  id: string;
  type: string;
  subType: string;
  days?: string;
  path: string;
  dynamic: boolean;
  filter: boolean;
  group: boolean;
  doctorDescription?: string;
  end: boolean;
  waitingList: boolean;
  pickType?: string;
};
