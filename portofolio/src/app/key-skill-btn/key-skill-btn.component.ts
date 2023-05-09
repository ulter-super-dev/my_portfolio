import { ITag } from './../utils/ITags';
import { TagsService } from './../services/tags.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-key-skill-btn',
  templateUrl: './key-skill-btn.component.html',
  styleUrls: ['./key-skill-btn.component.scss']
})
export class KeySkillBtnComponent implements OnInit {
  keySkills: ITag[];

  constructor(private tagsService: TagsService) {
    this.keySkills = tagsService.tags;
  }

  ngOnInit() {}

  toogleSkillSelection(tag: ITag) {
    this.tagsService.toggleSelection(tag.displayName);
  }

  disableIfOneBtn(keySkill: ITag) {
    const targetKeySkills = this.keySkills.filter(e => e.isSelected);
    return (
      targetKeySkills.length === 1 &&
      targetKeySkills[0].displayName === keySkill.displayName
    );
  }

}
