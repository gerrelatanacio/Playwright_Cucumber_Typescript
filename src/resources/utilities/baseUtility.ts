export function objectExtractor(primaryKey: string, fieldName: string, source: Object) {
    const validPrimaryKey = primaryKey as keyof typeof source;
    const primaryObject = source[validPrimaryKey];
    const validFieldNameKey = fieldName as keyof typeof primaryObject;
    const fieldValue = primaryObject[validFieldNameKey];
    return fieldValue;
  }