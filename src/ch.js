import chineseMessages from "ra-language-chinese";

export const ch = {
  ...chineseMessages,
  resources: {
    service: {
      name: "服务",
      fields: {
        url: "URL",
        method: "方法",
        body: "消息体",
        timeout: "超时时间",
        defaultValue: "默认值"
      }
    },
    event: {
      name: "事件",
      fields: {
        name: "事件名称",
        desc: "事件描述"
      }
    },
    field: {
      name: "字段",
      fields: {
        name: "字段名",
        desc: "字段描述",
        fieldType: "字段类型"
      }
    },
    variable: {
      name: "变量",
      fields: {
        name: "变量名",
        desc: "变量描述",
        fieldType: "字段类型",
        calcType: "计算类型",
        formula: "公式",
        depth: "计算深度",
        countSchemaId: "计数器",
        recent: "最近",
        countScopeEnum: "统计时间范围",
        countType: "统计类型"
      }
    },
    rule: {
      name: "策略",
      fields: {
        name: "策略名称",
        desc: "策略描述",
        logicExpress: "逻辑表达式",
        riskCode: "风险code",
        riskDesc: "风险描述",
        rules: {
          field: "字段",
          operator: "操作符",
          valueType: "值类型",
          value: "值"
        }
      }
    },
    count: {
      name: "计数器",
      fields: {
        name: "名称",
        sumKey: "汇总字段",
        countType: "计数类型",
        subKey: "从key",
        primaryKey: "主key",
        logicExpress: "逻辑表达式",
        conditionList: "过滤条件"
      }
    }
  }
};
