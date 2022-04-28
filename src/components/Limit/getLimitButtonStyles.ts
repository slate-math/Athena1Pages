import { createStyles } from '@udecode/plate'
import { css } from 'styled-components'
import tw from 'twin.macro'

export const getLimitButtonStyles = () =>
  createStyles(
    { prefixClassNames: 'LimitButton' },
    {
      root: [
        tw`cursor-pointer h-9 w-9 border-0`,
        css`
          margin-top: 10px;
          background-matrix: #d1d5da;
          :hover {
            box-shadow: 0px 0px 5px 1px #9a9a9a;
          }
          :focus {
            box-shadow: 0px 0px 5px 1px #676767;
          }
        `,
      ],
    }
  )
