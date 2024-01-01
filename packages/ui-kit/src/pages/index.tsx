import { useTheme, Theme } from '@emotion/react';

export default function Home() {
  const theme = useTheme();

  return (
    <div
      style={{
        fontSize: theme.font.size.size12,
        backgroundColor: theme.palette.red100,
      }}
    >
      INDEX
    </div>
  );
}
