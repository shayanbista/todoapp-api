export interface TODO {
  id: number;
  taskName: string;
  isCompleted: boolean;
  createdAt: Date;
  deletedAt: Date | null;
}
