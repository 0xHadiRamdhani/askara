const fs = require('fs');

function refactorFile(path, dataName, interfaceName, importType) {
  let content = fs.readFileSync(path, 'utf-8');
  
  // Remove the WHATSAPP constant if exists
  content = content.replace(/const WHATSAPP_NUMBER[\s\S]*?text=\$\{WHATSAPP_TEXT\}`;/m, "import { WHATSAPP_URL } from '../../domain/constants';");
  
  // Remove interface and data
  const dataRegex = new RegExp(`(//\\s*---.*?\\n)*//.*?\\nconst ${dataName}.*?=\\s*\\[[\\s\\S]*?\\];`, 'gm');
  content = content.replace(dataRegex, '');
  
  const interfaceRegex = new RegExp(`interface ${interfaceName}\\s*{[\\s\\S]*?}`, 'gm');
  content = content.replace(interfaceRegex, '');

  const dataImportRegex = new RegExp(`import {.*?${dataName}.*?} from '@/lib/data';\\n`, 'gm');
  content = content.replace(dataImportRegex, '');
  
  // Update import
  if (importType) {
    content = content.replace(/(import React.*?from 'react';)/, `$1\nimport { ${importType} } from '../../domain/entities/types';`);
  }
  
  // Update signature
  const funcRegex = /export default function ([A-Za-z]+)\(\) {/;
  content = content.replace(funcRegex, `interface Props {\n  ${dataName}: ${importType}[];\n}\n\nexport default function $1({ ${dataName} }: Props) {`);
  
  fs.writeFileSync(path, content);
}

refactorFile('src/presentation/components/About.tsx', 'coreValues', 'ValueItem', 'ValueItem');
refactorFile('src/presentation/components/Process.tsx', 'approaches', 'ApproachItem', 'ApproachItem');
refactorFile('src/presentation/components/IndustrySolutions.tsx', 'industrySolutions', 'SolutionItem', 'SolutionItem');
refactorFile('src/presentation/components/Services.tsx', 'services', 'ServiceItem', 'ServiceItem');

console.log("Refactored components");
