enum Courier {
  DHL = "DHL",
  FEDEX = "FEDEX",
}

enum OrderStatus {
  REGISTERED = "REGISTERED",
  NEW_DELIVERY_DATE_SET = "NEW_DELIVERY_DATE_SET",
  READY_FOR_COLLECTION = "READY_FOR_COLLECTION",
  FAILED_DELIVERY_ATTEMPT = "FAILED_DELIVERY_ATTEMPT",
  IN_TRANSIT = "IN_TRANSIT",
}

export interface Order {
  _id: string;
  courier: Courier;
  tracking_number: string;
  created: Date;
  updated: Date;
  checkpoints: Checkpoint[];
  delivery_info: DeliveryInfo;
  destination_country_iso3: string;
  zip_code: string;
}

export interface Checkpoint {
  status_details: string;
  event_timestamp: Date;
  status: OrderStatus;
  country_iso3: string;
  city: string;
  meta?: Meta;
}

export interface Meta {
  delivery_date?: Date;
  delivery_time_frame_from?: Date;
  delivery_time_frame_to?: Date;
  pickup_address?: string;
  pickup_address_link?: string;
  pickup_address_map_url?: string;
}

export interface DeliveryInfo {
  articles: Article[];
  orderNo: string;
  order_date: Date;
  recipient: string;
  recipient_notification: string;
  email: string;
  street: string;
  city: string;
  region: string;
  timezone: Date;
  announced_delivery_date: Date;
}

export interface Article {
  articleNo: string;
  articleName: string;
  articleImageUrl: null | string;
  quantity: number;
  price: number;
}
