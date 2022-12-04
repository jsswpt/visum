export type Room = {
  id: number;
  name: string;
  ownerId: number;
  videoUrl: string;
  previewUrl: string;
  usersCount: number;
  type: "public" | "private";
};
