import React from 'react';
import styled, { css } from 'styled-components';
import * as palette from './../Palette.js';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90vw;

  @media screen and (min-width: ${palette.BREAKPOINT_M}) {
    width: 58.3333333333vw;
  }

  ${props => props.small && css`
    @media screen and (min-width: ${palette.BREAKPOINT_S}) {
      width: 50vw;
    }

    @media screen and (min-width: ${palette.BREAKPOINT_M}) {
      width: 41.6666666666vw;
    }

    @media screen and (min-width: ${palette.BREAKPOINT_L}) {
      width: 33.3333333333vw;
    }

    @media screen and (min-width: ${palette.BREAKPOINT_XL}) {
      width: 16.6666666666vw;
    }
  `}

  ${props => props.large && css`
    @media screen and (min-width: ${palette.BREAKPOINT_M}) {
      width: 75vw;
    }
  `}
`;

export default Container;
