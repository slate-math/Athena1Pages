import React from 'react'
import { DragIndicator } from '@styled-icons/material/DragIndicator'
import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_IMAGE,
  ELEMENT_MEDIA_EMBED,
  ELEMENT_OL,
  ELEMENT_PARAGRAPH,
  ELEMENT_TABLE,
  ELEMENT_TODO_LI,
  ELEMENT_UL,
  withDraggables,
} from '@udecode/plate'
import Tippy from '@tippyjs/react'
import { TippyProps } from '@tippyjs/react'
import 'twin.macro'

const GrabberTooltipContent = () => (
  <div style={{ fontSize: 12 }}>
    <div>
      Drag <span style={{ color: 'rgba(255, 255, 255, 0.45)' }}>to move</span>
    </div>
  </div>
)

export const grabberTooltipProps: TippyProps = {
  content: <GrabberTooltipContent />,
  placement: 'bottom',
  arrow: false,
  offset: [0, 0],
  delay: [300, 0],
  duration: [0, 0],
  hideOnClick: true,
  theme: 'small',
}

export const withStyledDraggables = (components: any) => {
  return withDraggables(components, [
    {
      keys: [ELEMENT_PARAGRAPH, ELEMENT_UL, ELEMENT_OL],
      level: 0,
    },
    {
      keys: [
        ELEMENT_PARAGRAPH,
        ELEMENT_BLOCKQUOTE,
        ELEMENT_TODO_LI,
        ELEMENT_H1,
        ELEMENT_H2,
        ELEMENT_H3,
        ELEMENT_H4,
        ELEMENT_H5,
        ELEMENT_H6,
        ELEMENT_IMAGE,
        ELEMENT_OL,
        ELEMENT_UL,
        ELEMENT_TABLE,
        ELEMENT_MEDIA_EMBED,
        ELEMENT_CODE_BLOCK,
      ],
      onRenderDragHandle: ({ className, styles }) => {
        return (
          <Tippy {...grabberTooltipProps}>
<<<<<<< HEAD
            <button type="button" className={className} >
=======
            <button type="button" className={className} css={styles}>
>>>>>>> 6553d41ed59554d0b118e855b9d7c926dd530e66
              <DragIndicator
                style={{
                  width: 18,
                  height: 18,
                  color: 'rgba(55, 53, 47, 0.3)',
                }}
              />
            </button>
          </Tippy>
        )
      },
    },
    {
      key: ELEMENT_H1,
      styles: {
        gutterLeft: {
          padding: '2em 0 4px',
          fontSize: '1.875em',
        },
        blockToolbarWrapper: {
          height: '1.3em',
        },
      },
    },
    {
      key: ELEMENT_H2,
      styles: {
        gutterLeft: {
          padding: '1.4em 0 1px',
          fontSize: '1.5em',
        },
        blockToolbarWrapper: {
          height: '1.3em',
        },
      },
    },
    {
      key: ELEMENT_H3,
      styles: {
        gutterLeft: {
          padding: '1em 0 1px',
          fontSize: '1.25em',
        },
        blockToolbarWrapper: {
          height: '1.3em',
        },
      },
    },
    {
      keys: [ELEMENT_H4, ELEMENT_H5, ELEMENT_H6],
      styles: {
        gutterLeft: {
          padding: '0.75em 0 0',
          fontSize: '1.1em',
        },
        blockToolbarWrapper: {
          height: '1.3em',
        },
      },
    },
    {
      keys: [ELEMENT_PARAGRAPH, ELEMENT_UL, ELEMENT_OL],
      styles: {
        gutterLeft: {
          padding: '4px 0 0',
        },
      },
    },
    {
      key: ELEMENT_BLOCKQUOTE,
      styles: {
        gutterLeft: {
          padding: '18px 0 0',
        },
      },
    },
    {
      key: ELEMENT_CODE_BLOCK,
      styles: {
        gutterLeft: {
          padding: '12px 0 0',
        },
      },
    },
  ])
}
