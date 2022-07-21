import React, { useState } from 'react';
import styles from './styles.module.scss'
import { EditorState} from 'draft-js';
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const index = ({handleChange, value}) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  return <div className={styles.container + ` `}>
    <Editor
      editorState={value}
      onEditorStateChange={handleChange}
      toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
      }}
    />
  </div>;
};

export default index;