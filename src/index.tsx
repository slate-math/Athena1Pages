import 'tippy.js/dist/tippy.css'
import './index.css'
import ReactDOM from 'react-dom'
import React, { useMemo } from 'react'
import {
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  createPlateComponents,
  createPlateOptions,
  HeadingToolbar,
  MentionSelect,
  PlatePlugin,
  Plate,
  ToolbarSearchHighlight,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createExitBreakPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHistoryPlugin,
  createKbdPlugin,
  createImagePlugin,
  createItalicPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createReactPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createDndPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  createDeserializeHTMLPlugin,
  useFindReplacePlugin,
  useMentionPlugin,
  withProps,
  MentionElement,
  ELEMENT_MENTION,
  SPEditor,
  MARK_COLOR,
  withStyledProps,
  StyledLeaf,
  MARK_BG_COLOR,
  createFontColorPlugin,
  createFontBackgroundColorPlugin,
  createDeserializeMDPlugin,
  createDeserializeCSVPlugin,
  createDeserializeAstPlugin,
  ELEMENT_CODE_BLOCK,
  CodeBlockElement,
} from '@udecode/plate'
import {
  createExcalidrawPlugin,
  ELEMENT_EXCALIDRAW,
} from '@udecode/plate-excalidraw'
import {
  editableProps,
  optionsExitBreakPlugin,
  optionsMentionPlugin,
  optionsResetBlockTypePlugin,
  optionsSoftBreakPlugin,
  optionsAutoformat,
} from './components/mention/mentionOptions'
import { renderMentionLabel } from './components/mention/renderElementMention'
import { BallonToolbarMarks, ToolbarButtons } from './Toolbars'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Search } from '@styled-icons/material/Search'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'
import { css } from 'styled-components'
import { MathToolbar} from './components/toolbar'
import { components } from './components/plugin'
import { createBigOperatorPlugin, createFractionPlugin, createIntegralPlugin, createLimitPlugin, createSummationPlugin } from './components/plugin'
import { onAddMention } from './components/mention/mentionOptions'
type TEditor = SPEditor & ReactEditor & HistoryEditor

const id = 'Examples/Playground'





const options = createPlateOptions({
  // customize your options by plugin key
})

export const Plugins = () => {
  const { setSearch, plugin: searchHighlightPlugin } = useFindReplacePlugin()
  const { getMentionSelectProps, plugin: mentionPlugin } = useMentionPlugin( //TODO: move to plugins
    optionsMentionPlugin
  )

  const pluginsMemo: PlatePlugin<TEditor>[] = useMemo(() => {
    const plugins = [
      createReactPlugin(),
      createHistoryPlugin(),
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createImagePlugin(),
      createLinkPlugin(),
      createListPlugin(),
      createTablePlugin(),
      createMediaEmbedPlugin(),
      createCodeBlockPlugin(),
      createExcalidrawPlugin(),
      createAlignPlugin(),
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createHighlightPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createFontColorPlugin(),
      createFontBackgroundColorPlugin(),
      createKbdPlugin(),
      createNodeIdPlugin(),
      createDndPlugin(),
      createAutoformatPlugin(optionsAutoformat),
      createResetNodePlugin(optionsResetBlockTypePlugin),
      createSoftBreakPlugin(optionsSoftBreakPlugin),
      createExitBreakPlugin(optionsExitBreakPlugin),
      createTrailingBlockPlugin({
        type: ELEMENT_PARAGRAPH,
      }),
      createSelectOnBackspacePlugin({
        allow: [ELEMENT_IMAGE, ELEMENT_EXCALIDRAW],
      }),
      createIntegralPlugin(),
      createSummationPlugin(),
      createBigOperatorPlugin(),
      createFractionPlugin(),
      createLimitPlugin(),
      mentionPlugin,
      searchHighlightPlugin,
    ]

    plugins.push(
      ...[
        createDeserializeMDPlugin({ plugins }),
        createDeserializeCSVPlugin({ plugins }),
        createDeserializeHTMLPlugin({ plugins }),
        createDeserializeAstPlugin({ plugins }),
      ]
    )

    return plugins
  }, [mentionPlugin, searchHighlightPlugin])

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate
        id={id}
        plugins={pluginsMemo}
        components={components}
        options={options}
        editableProps={editableProps}
      >
        <ToolbarSearchHighlight icon={Search} setSearch={setSearch} />
        <HeadingToolbar>
          <ToolbarButtons />
        </HeadingToolbar>
        <HeadingToolbar>
          <MathToolbar />
        </HeadingToolbar>
        <BallonToolbarMarks />
        <MentionSelect
          {...getMentionSelectProps()}
          renderLabel={renderMentionLabel}
          //onClickMention = {onAddMention}
          
        />
      </Plate>
    </DndProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Plugins />, rootElement)
