import{_ as e,c as a,o as t,a as s}from"./app.24744b28.js";const u=JSON.parse('{"title":"Damage Types","description":"","frontmatter":{},"headers":[],"relativePath":"faq/3.md","lastUpdated":1670171088000}'),i={name:"faq/3.md"},l=s('<h1 id="damage-types" tabindex="-1">Damage Types <a class="header-anchor" href="#damage-types" aria-hidden="true">#</a></h1><p>tags: damage, damage types</p><p>There are 11 multiplier categories, though most valkyries don&#39;t use all of them at the same time, and some of these don&#39;t actually exist yet. The categories in bold are true multipliers - they never dilute, only multiply, even with themselves.</p><ol><li>Physical Damage Dealt</li><li>Physical Damage Taken</li><li>Elemental Damage Dealt</li><li>Elemental Damage Taken</li><li>Total Damage Dealt</li><li>Total Damage Taken</li><li>Typing Bonus</li><li>Dirac Weather Typing Bonus <strong>9. Host Specific Physical Taken Debuff</strong><strong>10. Host Specific Elemental Taken Debuff</strong><strong>11. Host Specific Total Taken Debuff</strong></li></ol><p>Any bonuses within a single category add together. Anything from seperate categories multiplies together to give the final result.</p><p>As an small example, assuming no other bonuses, having 20% physical and 20% physical just gives 40% physical as your final result. Having 20% physical and 20% TDM gives you <code>1.2 \xD7 1.2 = 1.44 = 44%</code> damage increase as final result.</p><p>For true multipliers, they multiply by their stated amount regardless. As an example, Thales M gives 2% host fire taken per stack, up to 10 stacks. Standalone, this is <code>1.02^10 ~ 1.22</code>, not <code>1.02 \xD7 10 = 1.2</code>.</p>',7),o=[l];function n(r,c,p,d,m,h){return t(),a("div",null,o)}const y=e(i,[["render",n]]);export{u as __pageData,y as default};
