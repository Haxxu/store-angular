import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [CommonModule, QuillModule],
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
})
export default class TextEditorComponent {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  imageList: FileList;
  imageArr = new Array<string>();
  showImage = false;
  isShowToolbar = false;

  uploadImage(event: any) {
    for (const image of event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (data: any) => {
        this.imageArr.push(data.target.result);
        this.showImage = true;
      };
    }
  }

  removeImage(index: number) {
    this.imageArr.splice(index, 1);
  }
}
