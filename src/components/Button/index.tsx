import React from "react";
import {
  Button,
  TextButton,
} from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void
}

export function ButtonComponent({ title, onPress }: ButtonProps) {
  return (
    <Button onPress={onPress}>
      <TextButton>{title}</TextButton>
    </Button>
  );
}