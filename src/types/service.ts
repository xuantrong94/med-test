export type Service = {
  id: string;
  type: string;
  name: string;
  price: number;
  displayDetail: string;
  subjectNames: string[];
  popupContent: string | null;
  popupTitle: string;
  popupContentUrl: string | null;
  ctas: ServiceCta[];
};

export type ServiceCta = {
  name: string;
  partnerId: string;
  treeId: string;
  subjectId: string | null;
  serviceId: string | null;
  doctorId: string | null;
  roomId: string | null;
  subjectName?: string | null;
  serviceName?: string | null;
  roomName?: string;
};
