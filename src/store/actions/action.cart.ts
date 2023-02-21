interface addAction {
  payload?: [];
}

interface removeAction {
  payload?: number;
}

export type CartAction = addAction | removeAction;
