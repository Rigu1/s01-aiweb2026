// Page content lives here so text updates do not require editing index.html.
window.projectPage = {
  title: "Café de Music",
  sections: [
    {
      type: "summary",
      title: "간단 설명",
      paragraphs: [
        "Café de Music은 음원 일부 구간을 AI로 분석해 장르 비율을 보여주고, 그 결과를 바탕으로 어울리는 음악을 추천하는 서비스입니다."
      ]
    },
    {
      type: "paired",
      title: "문제와 사용자",
      panels: [
        {
          label: "문제",
          text: "음악을 들을 때 특정 곡이 어떤 장르적 특징을 갖고 있는지 객관적으로 파악하기 어렵습니다. 사용자는 직접 장르를 검색하거나 플레이리스트를 훑어야 해서 비슷한 분위기의 곡을 찾는 데 시간이 걸립니다. Café de Music은 음원의 일부 구간을 분석해 장르 비율을 보여주고, 그 결과를 바탕으로 추천 곡을 제안합니다."
        },
        {
          label: "사용자",
          text: "새로운 음악을 자주 찾는 일반 사용자와 자신의 취향을 더 구체적으로 알고 싶은 음악 감상자를 대상으로 합니다. 특히 \"이 곡과 비슷한 느낌의 음악\"을 빠르게 찾고 싶은 사람에게 적합합니다."
        }
      ]
    },
    {
      title: "핵심 기능",
      listType: "feature",
      items: [
        { label: "구간 설정", text: "음원에서 장르를 추출할 특정 구간을 설정합니다." },
        { label: "장르 분석", text: "설정된 구간을 분석하여 어떤 장르에 가까운지 객관적인 데이터로 추출합니다." },
        { label: "음악 추천", text: "추출된 데이터를 기반으로 3가지 곡을 유튜브 링크와 함께 추천합니다." }
      ]
    },
    {
      title: "동작 흐름",
      listType: "flow",
      items: [
        "음원 파일 업로드",
        "분석 구간 입력",
        "HF 모델 장르 비율 추출",
        "Gemini API 추천 생성",
        "추천 곡 3개와 이유 출력"
      ]
    },
    {
      title: "기술 스택",
      listType: "stack",
      items: [
        {
          group: "프레임워크",
          entries: [
            { label: "HTML", meta: "UI Markup" },
            { label: "Vanilla JS", meta: "Client Logic" },
            { label: "CSS", meta: "Cafe Menu Board UI" },
            { label: "Express.js", meta: "Node Server" },
            { label: "Python 3", meta: "Audio Processing" },
            { label: "multer / librosa", meta: "Upload & Analysis" }
          ]
        },
        {
          group: "모델 및 API",
          entries: [
            { label: "HF model", meta: "dima806/music_genres_classification" },
            { label: "Gemini API", meta: "gemini-3.5-flash-Lite" }
          ]
        }
      ]
    },
  ]
};
