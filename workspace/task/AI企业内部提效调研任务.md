# 任务
我的老板让我对AI内部提效课题做一下调研：
- 业界AI+Inside以及Enterprise类产品和应用的情况(**AI+Inside主要指企业内部员工运用AI技术进行工作提效**)。
  - 因为AI+Inside业界未必有类似的概念，我们更多的可能要看AI+销售、AI+客服、AI+Marketing、AI+BI、AI+用户运营(内容创作)、AI+供应链运营、AI+PMO等等比较大类的行业/岗位，来看看企业本身如何做，以及提供相关的软件工具的软件服务商如何做

作为我的仆人，你具备资深的AI技术功底和市场洞察力，你必须帮助我完成这个课题的调研，并生成相关的调研报告。

# 可用技能列表
- aisa-search
- aisa-twitter
- aisa-youtube
- tavily-search
- video-download

# 执行步骤
1. 根据任务主题，使用tavily-search先搜索或探索企业内部一般有哪些角色或工种，这些人一般都从事些什么工作内容。
2. 对这些内容做关键词的总结和抽取，要注意这些提取的关键词必须是“AI+XX”的格式，因为我们的主题是AI提效，所以需要搜索AI对这些关键词的工作内容做提效的案例，重点需要关注是通过什么工具或软件,尽可能多的生成关键词。
3. 将关键词都翻译成英文，后续都使用英文的关键词。
4. 遍历关键词，使用tavily-search进行 deep 搜索最近 365天的数据，不少于20条记录，结果保存到文件。
5. 遍历关键词，使用aisa-search的Multi-Stage Orchestration能力搜索数据，不少于20条记录，结果保存到文件。
6. 遍历关键词，使用aisa-twitter搜索热门趋势数据和具体内容，结果保存到文件。
7. 搜索的内容要直接读取原始的链接的内容保存，可以使用tavily-search的extract功能。
8. 遍历关键词，使用aisa-youtube搜索相关关键词的视频，每个关键词不少于10个视频，要输出具体的视频链接。
9. 如果没有获取到视频链接，需要排查问题原因并解决。
10. 对视频链接使用video-download技能获取视频的字幕文字内容，cookiefile参数设置为"~/workspace/openclaw-workspace/cookie/www.youtube.com_cookies.txt"，onlysubtitle设置为true, overwrite_subtitle设置为false, download_subtitle设置为true。
11. 依次阅读和理解每个关键词的所有文档素材(**包括md文件和常见的字幕文件，字幕文件不同后缀的读取一个就行了**)。
12. 为每个关键词依次生成调研报告，内容不能低于1万字，如果有需要补充的内容，可以直接通过tavily-search搜索。
13. 合并所有关键词的调研报告，生成一份关于AI+Inside的汇总报告，注意：这个报告不是总结，而是要包含所有的关键词报告的内容，要尽可能的还原所有的内容。

# 要求
1. 所有的下载和生成的文件都必须保存到 ~/workspace/openclaw-data目录下
2. 每个课题必须单独文件夹保存
3. 每个视频必须提取视频的标题，标题做精简后作为文件夹名称，所有这个视频相关的文件保存在这个文件夹下
4. 有任务报错必须直接反馈给我，让我判断是不是需要继续执行
5. video-download技能只能主Agent执行，其它技能可以根据情况创建多个子agent执行。
6. 每个课题最终的调研报告必须在详细理解该课题下的所有素材文档后才能生成，必须在报告最后列出所使用的素材的网页地址。
7. 必须定时向我汇报任务的执行进度(可以设置1分钟间隔执行的定时任务)，汇报内容最好有具体事项的百分比进展.
8. 最终的报告格式可以参考 ~/workspace/openclaw-workspace/research_template/Industry_Research_Report_Template.md