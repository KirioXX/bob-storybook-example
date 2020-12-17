---
inject: true
to: src/<%= parentPath %>/index.ts
append: true
skip_if: <%= component_name %>
---
export * from './<%= component_name %>';
