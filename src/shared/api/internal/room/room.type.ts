export type Room = {
  id: number;
  name: string;
  ownerName: string;
  videoUrl: string;
  previewUrl: string;
  usersCount: number;
  type: "public" | "private";
};
