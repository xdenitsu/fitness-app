import { MD3Theme } from "react-native-paper";

export interface PromptDialogProps {
  visible: boolean;
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
  theme: MD3Theme;
}
