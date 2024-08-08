import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import MyCustomUploadAdapterPlugin from "@/components/presentation/MyCustomUploadAdapterPlugin.js";

function MCKEditor() {
   const [editorData, setEditorData] = useState("");

   return (
      <div>
         <CKEditor
            editor={ClassicEditor}
            data={editorData}
            config={{
               toolbar: [
                  "heading",
                  "|",
                  "bold",
                  "italic",
                  "link",
                  "bulletedList",
                  "numberedList",
                  "blockQuote",
                  "imageUpload",
                  "|",
                  "undo",
                  "redo",
               ],
               // ckfinder: {
               //    uploadUrl: "http://haisamlogistics.com:8099/api/v1/admin/upload",
               // },
               extraPlugins: [MyCustomUploadAdapterPlugin],
            }}
            onChange={(event, editor) => {
               const data = editor.getData();
               setEditorData(data);
               console.log("son", { event, editor, data });
            }}
         />
      </div>
   );
}

export default MCKEditor;
