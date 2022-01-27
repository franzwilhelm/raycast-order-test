import { List } from "@raycast/api";

export default function ItemTest() {
  return (
    <List>
      <List.Item title="Same title, different subtitle" subtitle="Look, I jump around" />
      <List.Item title="Same title, different subtitle" subtitle="I jump around too!" />
      <List.Item title="Same title, different subtitle" subtitle="What? Me too?" />
    </List>
  );
}
