import type { Meta, StoryObj } from '@storybook/angular';
import TextEditor from './text-editor.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<TextEditor> = {
  title: 'Components/TextEditor',
  component: TextEditor,
  tags: ['autodocs'], // Generate autodocs
  render: (args: TextEditor) => ({
    props: {
      ...args,
    },
  }),
  // More on writing stories with parameters: https://storybook.js.org/docs/angular/writing-stories/parameters
  parameters: {
    // Description for component (optional)
    docs: {
      description: {
        component: 'Description for Text Editor',
      },
    },
    // // Link to Zeplin design
    // zeplinLink:
    //   'https://app.zeplin.io/project/643e1c36ecdfc72405c25eba/screen/64411e53f46b022376c3447a',
    // // Link to Figma design
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    // },
  },
};

export default meta;
type Story = StoryObj<TextEditor>;
export const TextEditors: Story = {
  args: {
    placeholder: 'Add Place Name',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Text editor is an interface or input field for text editing, that includes advanced styling options like heading levels, bold, italic, bullet points, font typefaces, and text size. You can also embed images, hyperlinks into a text editor.',
      },
    },
  },
};
