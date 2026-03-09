#!/bin/bash
KW="$1"
SAFE_KW="${KW// /_}"
OUT_DIR="/Users/liuyuan/workspace/openclaw-data/$SAFE_KW"
CONTENTS_DIR="$OUT_DIR/contents"
mkdir -p "$CONTENTS_DIR"

echo "Processing keyword: $KW"

# Step 4 & 5: Combined Search (Tavily Deep + Aisa Verity)
python3 /Users/liuyuan/workspace/openclaw-workspace/skills/aisa-search/scripts/search_client.py verity --query "$KW enterprise use cases and software tools" --count 20 > "$OUT_DIR/search_results.json"

# Step 6: Aisa-twitter Search
python3 /Users/liuyuan/workspace/openclaw-workspace/skills/aisa-twitter/scripts/twitter_client.py search --query "$KW" > "$OUT_DIR/aisa_twitter.json"

# Step 8: Aisa-youtube Search
python3 /Users/liuyuan/workspace/openclaw-workspace/skills/aisa-youtube/scripts/youtube_client.py search --query "$KW enterprise tools tutorial" > "$OUT_DIR/aisa_youtube.json"

# Step 7: Extract link contents
echo "Extracting content from links..."
python3 -c "
import json, sys
try:
    with open('$OUT_DIR/search_results.json', 'r') as f:
        data = json.load(f)
    links = []
    if 'sources' in data:
        for source in data['sources'].values():
            if isinstance(source, dict):
                for res in source.get('results', []):
                    if 'link' in res: links.append(res['link'])
                    elif 'url' in res: links.append(res['url'])
    unique_links = list(dict.fromkeys(links))[:20]
    for link in unique_links: print(link)
except Exception as e:
    print(f'Error parsing search results: {e}', file=sys.stderr)
" > "$OUT_DIR/links_to_extract.txt"

i=1
while read link; do
    echo "Extracting [$i]: $link"
    node /Users/liuyuan/workspace/openclaw-workspace/skills/tavily-search/scripts/extract.mjs "$link" > "$CONTENTS_DIR/content_$i.md" 2>/dev/null
    ((i++))
done < "$OUT_DIR/links_to_extract.txt"

# Step 10: Video Download and Subtitles
echo "Downloading videos and subtitles..."
python3 -c "
import json, sys
try:
    with open('$OUT_DIR/aisa_youtube.json', 'r') as f:
        data = json.load(f)
    links = []
    # Check videos and sections
    if 'videos' in data:
        for v in data['videos']: links.append(v['link'])
    if 'sections' in data:
        for s in data['sections']:
            for item in s.get('items', []):
                if 'link' in item: links.append(item['link'])
    unique_links = list(dict.fromkeys(links))[:10]
    for link in unique_links: print(link)
except Exception as e:
    print(f'Error parsing youtube results: {e}', file=sys.stderr)
" > "$OUT_DIR/videos_to_download.txt"

VIDEO_OUT_DIR="$OUT_DIR/videos"
mkdir -p "$VIDEO_OUT_DIR"

while read vlink; do
    echo "Processing video: $vlink"
    # Use video_parser.py
    # Note: cookiefile path is as requested
    PARAMS="{\"urls\":[\"$vlink\"],\"output\":\"$VIDEO_OUT_DIR\",\"cookiefile\":\"/Users/liuyuan/workspace/openclaw-workspace/cookie/www.youtube.com_cookies.txt\",\"download_subtitle\":true,\"overwrite_subtitle\":false}"
    python3 /Users/liuyuan/workspace/openclaw-workspace/skills/video-download/scripts/video_parser.py "$PARAMS"
done < "$OUT_DIR/videos_to_download.txt"
