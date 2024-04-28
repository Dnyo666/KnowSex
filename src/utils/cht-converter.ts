import * as OpenCC from "opencc-js";

// 自定义转换组
const customDict = [
    ['“', '「'],
    ['”', '」'],
    ['‘', '『'],
    ['’', '』'],

    // 生物学名词
    ['艾滋病', '愛滋病'],
    ['获得性免疫缺陷综合征', '後天免疫缺乏症候群'],
    ['人类免疫缺陷病毒', '人類免疫缺乏病毒'],
    ['尖锐湿疣', '尖銳濕疣'],
    ['人乳头状瘤病毒', '人類乳突病毒'],
    ['综合征', '症候群']
];

export const convertToZH_TW = OpenCC.ConverterFactory(
    [customDict],
    OpenCC.Locale.from.cn, // 大陆 => OpenCC 标准
    OpenCC.Locale.to.twp   // OpenCC 标准 => 台湾+自订
);