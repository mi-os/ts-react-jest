import React from 'react';
import styled from 'styled-components';

const Box = styled.header`
  text-align: center;
  background-color: skyblue;
`;

const Text = styled.p`
  font-size: 20px;
  color: white;
`;

export const Header = (props: any) => {
  return (
    <>
      <Box>
        <Text>{props.text}</Text>
      </Box>
    </>
  );
};
