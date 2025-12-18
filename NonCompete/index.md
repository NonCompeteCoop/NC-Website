---
title: "Non-Compete Home"
---
```dataview
TABLE WITHOUT ID
  ("![|150](https://img.youtube.com/vi/" + video_id + "/0.jpg)") as Preview,
  file.link as Title,
  topic as Topic
FROM "NonCompete/Videos"
WHERE file.name != "index"
SORT date DESC
```
