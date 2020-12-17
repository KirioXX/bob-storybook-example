---
inject: true
to: example/stories/<%= parentPath %>/index.ts
append: true
skip_if: <%= component_name %>
---
import './<%= component_name %>.stories';
