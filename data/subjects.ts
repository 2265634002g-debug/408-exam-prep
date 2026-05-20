import type { SubjectInfo } from '@/types/knowledge';

export const subjects: SubjectInfo[] = [
  {
    id: 'ds',
    name: '数据结构',
    fullName: '数据结构',
    color: '#4f46e5',
    chapters: [
      {
        id: 'ds-1',
        chapterNum: 1,
        title: '绪论',
        sections: [
          { id: 'ds-1-1', title: '数据结构的基本概念', knowledgePointIds: ['ds-1-1-1', 'ds-1-1-2', 'ds-1-1-3'] },
          { id: 'ds-1-2', title: '算法和算法评价', knowledgePointIds: ['ds-1-2-1', 'ds-1-2-2', 'ds-1-2-3'] },
        ],
      },
      {
        id: 'ds-2',
        chapterNum: 2,
        title: '线性表',
        sections: [
          { id: 'ds-2-1', title: '线性表的定义和基本操作', knowledgePointIds: ['ds-2-1-1', 'ds-2-1-2'] },
          { id: 'ds-2-2', title: '线性表的顺序表示', knowledgePointIds: ['ds-2-2-1', 'ds-2-2-2', 'ds-2-2-3', 'ds-2-2-4'] },
          { id: 'ds-2-3', title: '线性表的链式表示', knowledgePointIds: ['ds-2-3-1', 'ds-2-3-2', 'ds-2-3-3', 'ds-2-3-4', 'ds-2-3-5', 'ds-2-3-6'] },
        ],
      },
      {
        id: 'ds-3',
        chapterNum: 3,
        title: '栈、队列和数组',
        sections: [
          { id: 'ds-3-1', title: '栈', knowledgePointIds: ['ds-3-1-1', 'ds-3-1-2', 'ds-3-1-3', 'ds-3-1-4'] },
          { id: 'ds-3-2', title: '队列', knowledgePointIds: ['ds-3-2-1', 'ds-3-2-2', 'ds-3-2-3', 'ds-3-2-4'] },
          { id: 'ds-3-3', title: '栈和队列的应用', knowledgePointIds: ['ds-3-3-1', 'ds-3-3-2', 'ds-3-3-3', 'ds-3-3-4'] },
          { id: 'ds-3-4', title: '数组和特殊矩阵', knowledgePointIds: ['ds-3-4-1', 'ds-3-4-2', 'ds-3-4-3'] },
        ],
      },
      {
        id: 'ds-4',
        chapterNum: 4,
        title: '串',
        sections: [
          { id: 'ds-4-1', title: '串的定义和基本操作', knowledgePointIds: ['ds-4-1-1', 'ds-4-1-2'] },
          { id: 'ds-4-2', title: '串的模式匹配', knowledgePointIds: ['ds-4-2-1', 'ds-4-2-2', 'ds-4-2-3'] },
        ],
      },
      {
        id: 'ds-5',
        chapterNum: 5,
        title: '树与二叉树',
        sections: [
          { id: 'ds-5-1', title: '树的基本概念', knowledgePointIds: ['ds-5-1-1', 'ds-5-1-2'] },
          { id: 'ds-5-2', title: '二叉树的概念', knowledgePointIds: ['ds-5-2-1', 'ds-5-2-2', 'ds-5-2-3'] },
          { id: 'ds-5-3', title: '二叉树的遍历和线索二叉树', knowledgePointIds: ['ds-5-3-1', 'ds-5-3-2', 'ds-5-3-3', 'ds-5-3-4'] },
          { id: 'ds-5-4', title: '树、森林', knowledgePointIds: ['ds-5-4-1', 'ds-5-4-2', 'ds-5-4-3'] },
          { id: 'ds-5-5', title: '树与二叉树的应用', knowledgePointIds: ['ds-5-5-1', 'ds-5-5-2', 'ds-5-5-3'] },
        ],
      },
      {
        id: 'ds-6',
        chapterNum: 6,
        title: '图',
        sections: [
          { id: 'ds-6-1', title: '图的基本概念', knowledgePointIds: ['ds-6-1-1'] },
          { id: 'ds-6-2', title: '图的存储及基本操作', knowledgePointIds: ['ds-6-2-1', 'ds-6-2-2', 'ds-6-2-3'] },
          { id: 'ds-6-3', title: '图的遍历', knowledgePointIds: ['ds-6-3-1', 'ds-6-3-2'] },
          { id: 'ds-6-4', title: '图的应用', knowledgePointIds: ['ds-6-4-1', 'ds-6-4-2', 'ds-6-4-3', 'ds-6-4-4', 'ds-6-4-5'] },
        ],
      },
      {
        id: 'ds-7',
        chapterNum: 7,
        title: '查找',
        sections: [
          { id: 'ds-7-1', title: '查找的基本概念', knowledgePointIds: ['ds-7-1-1'] },
          { id: 'ds-7-2', title: '顺序查找和折半查找', knowledgePointIds: ['ds-7-2-1', 'ds-7-2-2'] },
          { id: 'ds-7-3', title: '树型查找', knowledgePointIds: ['ds-7-3-1', 'ds-7-3-2', 'ds-7-3-3'] },
          { id: 'ds-7-4', title: '散列表', knowledgePointIds: ['ds-7-4-1', 'ds-7-4-2', 'ds-7-4-3'] },
          { id: 'ds-7-5', title: '串的匹配', knowledgePointIds: ['ds-7-5-1'] },
        ],
      },
      {
        id: 'ds-8',
        chapterNum: 8,
        title: '排序',
        sections: [
          { id: 'ds-8-1', title: '排序的基本概念', knowledgePointIds: ['ds-8-1-1'] },
          { id: 'ds-8-2', title: '插入排序', knowledgePointIds: ['ds-8-2-1', 'ds-8-2-2'] },
          { id: 'ds-8-3', title: '交换排序', knowledgePointIds: ['ds-8-3-1', 'ds-8-3-2'] },
          { id: 'ds-8-4', title: '选择排序', knowledgePointIds: ['ds-8-4-1'] },
          { id: 'ds-8-5', title: '归并排序和基数排序', knowledgePointIds: ['ds-8-5-1', 'ds-8-5-2'] },
          { id: 'ds-8-6', title: '各种内部排序算法的比较', knowledgePointIds: ['ds-8-6-1'] },
          { id: 'ds-8-7', title: '外部排序', knowledgePointIds: ['ds-8-7-1'] },
        ],
      },
    ],
  },
  {
    id: 'co',
    name: '计组',
    fullName: '计算机组成原理',
    color: '#dc2626',
    chapters: [
      {
        id: 'co-1',
        chapterNum: 1,
        title: '计算机系统概述',
        sections: [
          { id: 'co-1-1', title: '计算机发展历程', knowledgePointIds: ['co-1-1-1'] },
          { id: 'co-1-2', title: '计算机系统层次结构', knowledgePointIds: ['co-1-2-1'] },
          { id: 'co-1-3', title: '计算机性能指标', knowledgePointIds: ['co-1-3-1'] },
        ],
      },
      {
        id: 'co-2',
        chapterNum: 2,
        title: '数据的表示和运算',
        sections: [
          { id: 'co-2-1', title: '数制与编码', knowledgePointIds: ['co-2-1-1', 'co-2-1-2'] },
          { id: 'co-2-2', title: '定点数的表示与运算', knowledgePointIds: ['co-2-2-1', 'co-2-2-2'] },
          { id: 'co-2-3', title: '浮点数的表示与运算', knowledgePointIds: ['co-2-3-1', 'co-2-3-2'] },
          { id: 'co-2-4', title: '算术逻辑单元 ALU', knowledgePointIds: ['co-2-4-1'] },
        ],
      },
      {
        id: 'co-3',
        chapterNum: 3,
        title: '存储系统',
        sections: [
          { id: 'co-3-1', title: '存储器概述', knowledgePointIds: ['co-3-1-1'] },
          { id: 'co-3-2', title: '主存储器', knowledgePointIds: ['co-3-2-1', 'co-3-2-2'] },
          { id: 'co-3-3', title: '高速缓冲存储器 Cache', knowledgePointIds: ['co-3-3-1', 'co-3-3-2', 'co-3-3-3'] },
          { id: 'co-3-4', title: '虚拟存储器', knowledgePointIds: ['co-3-4-1'] },
        ],
      },
      {
        id: 'co-4',
        chapterNum: 4,
        title: '指令系统',
        sections: [
          { id: 'co-4-1', title: '指令格式', knowledgePointIds: ['co-4-1-1'] },
          { id: 'co-4-2', title: '指令的寻址方式', knowledgePointIds: ['co-4-2-1'] },
          { id: 'co-4-3', title: 'CISC 和 RISC', knowledgePointIds: ['co-4-3-1'] },
        ],
      },
      {
        id: 'co-5',
        chapterNum: 5,
        title: '中央处理器',
        sections: [
          { id: 'co-5-1', title: 'CPU 的功能和基本结构', knowledgePointIds: ['co-5-1-1'] },
          { id: 'co-5-2', title: '数据通路', knowledgePointIds: ['co-5-2-1'] },
          { id: 'co-5-3', title: '控制器', knowledgePointIds: ['co-5-3-1'] },
          { id: 'co-5-4', title: '异常和中断', knowledgePointIds: ['co-5-4-1'] },
          { id: 'co-5-5', title: '指令流水线', knowledgePointIds: ['co-5-5-1'] },
          { id: 'co-5-6', title: '多处理器基本概念', knowledgePointIds: [] },
        ],
      },
      {
        id: 'co-6',
        chapterNum: 6,
        title: '总线',
        sections: [
          { id: 'co-6-1', title: '总线概述', knowledgePointIds: ['co-6-1-1'] },
          { id: 'co-6-2', title: '总线仲裁', knowledgePointIds: ['co-6-2-1'] },
          { id: 'co-6-3', title: '总线操作和定时', knowledgePointIds: ['co-6-3-1'] },
          { id: 'co-6-4', title: '总线标准', knowledgePointIds: [] },
        ],
      },
      {
        id: 'co-7',
        chapterNum: 7,
        title: '输入/输出系统',
        sections: [
          { id: 'co-7-1', title: 'I/O 系统基本概念', knowledgePointIds: ['co-7-1-1'] },
          { id: 'co-7-2', title: '程序查询方式', knowledgePointIds: ['co-7-2-1'] },
          { id: 'co-7-3', title: '程序中断方式', knowledgePointIds: ['co-7-3-1'] },
          { id: 'co-7-4', title: 'DMA 方式', knowledgePointIds: ['co-7-4-1'] },
        ],
      },
    ],
  },
  {
    id: 'os',
    name: '操作系统',
    fullName: '操作系统',
    color: '#16a34a',
    chapters: [
      {
        id: 'os-1',
        chapterNum: 1,
        title: '计算机系统概述',
        sections: [
          { id: 'os-1-1', title: '操作系统的基本概念', knowledgePointIds: ['os-1-1-1'] },
          { id: 'os-1-2', title: '操作系统的发展和分类', knowledgePointIds: ['os-1-2-1'] },
          { id: 'os-1-3', title: '操作系统的运行环境', knowledgePointIds: ['os-1-3-1'] },
          { id: 'os-1-4', title: '操作系统体系结构', knowledgePointIds: ['os-1-4-1'] },
        ],
      },
      {
        id: 'os-2',
        chapterNum: 2,
        title: '进程管理',
        sections: [
          { id: 'os-2-1', title: '进程与线程', knowledgePointIds: ['os-2-1-1'] },
          { id: 'os-2-2', title: 'CPU 调度', knowledgePointIds: ['os-2-2-1'] },
          { id: 'os-2-3', title: '同步与互斥', knowledgePointIds: ['os-2-3-1', 'os-2-3-2', 'os-2-3-3', 'os-2-3-4'] },
          { id: 'os-2-4', title: '死锁', knowledgePointIds: ['os-2-4-1'] },
        ],
      },
      {
        id: 'os-3',
        chapterNum: 3,
        title: '内存管理',
        sections: [
          { id: 'os-3-1', title: '内存管理概念', knowledgePointIds: ['os-3-1-1'] },
          { id: 'os-3-2', title: '连续分配管理方式', knowledgePointIds: ['os-3-2-1'] },
          { id: 'os-3-3', title: '非连续分配管理方式', knowledgePointIds: ['os-3-3-1'] },
          { id: 'os-3-4', title: '虚拟内存管理', knowledgePointIds: ['os-3-4-1'] },
        ],
      },
      {
        id: 'os-4',
        chapterNum: 4,
        title: '文件管理',
        sections: [
          { id: 'os-4-1', title: '文件系统基础', knowledgePointIds: ['os-4-1-1'] },
          { id: 'os-4-2', title: '文件系统实现', knowledgePointIds: ['os-4-2-1'] },
          { id: 'os-4-3', title: '磁盘组织与管理', knowledgePointIds: ['os-4-3-1'] },
        ],
      },
      {
        id: 'os-5',
        chapterNum: 5,
        title: '输入/输出管理',
        sections: [
          { id: 'os-5-1', title: 'I/O 管理概述', knowledgePointIds: ['os-5-1-1'] },
          { id: 'os-5-2', title: 'I/O 核心子系统', knowledgePointIds: ['os-5-2-1'] },
        ],
      },
    ],
  },
  {
    id: 'cn',
    name: '计网',
    fullName: '计算机网络',
    color: '#ca8a04',
    chapters: [
      {
        id: 'cn-1',
        chapterNum: 1,
        title: '计算机网络体系结构',
        sections: [
          { id: 'cn-1-1', title: '计算机网络概述', knowledgePointIds: ['cn-1-1-1'] },
          { id: 'cn-1-2', title: '计算机网络体系结构与参考模型', knowledgePointIds: ['cn-1-2-1'] },
        ],
      },
      {
        id: 'cn-2',
        chapterNum: 2,
        title: '物理层',
        sections: [
          { id: 'cn-2-1', title: '通信基础', knowledgePointIds: ['cn-2-1-1'] },
          { id: 'cn-2-2', title: '传输介质', knowledgePointIds: ['cn-2-2-1'] },
          { id: 'cn-2-3', title: '物理层设备', knowledgePointIds: ['cn-2-3-1'] },
        ],
      },
      {
        id: 'cn-3',
        chapterNum: 3,
        title: '数据链路层',
        sections: [
          { id: 'cn-3-1', title: '数据链路层的功能', knowledgePointIds: ['cn-3-1-1'] },
          { id: 'cn-3-2', title: '组帧', knowledgePointIds: ['cn-3-2-1'] },
          { id: 'cn-3-3', title: '差错控制', knowledgePointIds: ['cn-3-3-1'] },
          { id: 'cn-3-4', title: '流量控制与可靠传输机制', knowledgePointIds: ['cn-3-4-1'] },
          { id: 'cn-3-5', title: '介质访问控制', knowledgePointIds: ['cn-3-5-1'] },
          { id: 'cn-3-6', title: '局域网', knowledgePointIds: ['cn-3-6-1'] },
          { id: 'cn-3-7', title: '广域网', knowledgePointIds: ['cn-3-7-1'] },
          { id: 'cn-3-8', title: '数据链路层设备', knowledgePointIds: ['cn-3-8-1'] },
        ],
      },
      {
        id: 'cn-4',
        chapterNum: 4,
        title: '网络层',
        sections: [
          { id: 'cn-4-1', title: '网络层的功能', knowledgePointIds: ['cn-4-1-1'] },
          { id: 'cn-4-2', title: 'IPv4', knowledgePointIds: ['cn-4-2-1'] },
          { id: 'cn-4-3', title: 'IPv6', knowledgePointIds: ['cn-4-3-1'] },
          { id: 'cn-4-4', title: '路由算法与路由协议', knowledgePointIds: ['cn-4-4-1'] },
          { id: 'cn-4-5', title: 'IP 多播', knowledgePointIds: ['cn-4-5-1'] },
          { id: 'cn-4-6', title: '移动 IP', knowledgePointIds: ['cn-4-6-1'] },
          { id: 'cn-4-7', title: '网络层设备', knowledgePointIds: ['cn-4-7-1'] },
        ],
      },
      {
        id: 'cn-5',
        chapterNum: 5,
        title: '传输层',
        sections: [
          { id: 'cn-5-1', title: '传输层提供的服务', knowledgePointIds: ['cn-5-1-1'] },
          { id: 'cn-5-2', title: 'UDP 协议', knowledgePointIds: ['cn-5-2-1'] },
          { id: 'cn-5-3', title: 'TCP 协议', knowledgePointIds: ['cn-5-3-1'] },
        ],
      },
      {
        id: 'cn-6',
        chapterNum: 6,
        title: '应用层',
        sections: [
          { id: 'cn-6-1', title: '网络应用模型', knowledgePointIds: ['cn-6-1-1'] },
          { id: 'cn-6-2', title: 'DNS 系统', knowledgePointIds: ['cn-6-2-1'] },
          { id: 'cn-6-3', title: 'FTP', knowledgePointIds: ['cn-6-3-1'] },
          { id: 'cn-6-4', title: '电子邮件', knowledgePointIds: ['cn-6-4-1'] },
          { id: 'cn-6-5', title: '万维网 WWW', knowledgePointIds: ['cn-6-5-1'] },
        ],
      },
    ],
  },
];

export function getSubjectById(id: string): SubjectInfo | undefined {
  return subjects.find(s => s.id === id);
}

export function getChapterById(id: string) {
  for (const subject of subjects) {
    const chapter = subject.chapters.find(c => c.id === id);
    if (chapter) return { subject, chapter };
  }
  return undefined;
}

export function getAllChapters() {
  return subjects.flatMap(s =>
    s.chapters.map(c => ({ ...c, subject: s.id, subjectName: s.name }))
  );
}
