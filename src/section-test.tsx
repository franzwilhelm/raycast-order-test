import { List } from "@raycast/api";

export default function SectionTest() {
  return (
    <List>
      <List.Section title="Look i jump around">
        <List.Item title="Exactly the same element" />
      </List.Section>
      <List.Section title="Me too!">
        <List.Item title="Exactly the same element" />
      </List.Section>
    </List>
  );
}
