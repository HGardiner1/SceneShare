import fandom

def get_chars_from_episode(ep_num: int) -> List[str]:
    page = fandom.page(title=f"Episode {ep_num}")
    chars_str = page.content["sections"][2]["content"]
    chars = chars_str.split("\n")
    chars = list(map(_extract_character_name, chars))
    return chars

def _extract_character_name(char: str) -> str:
    match = re.match(r"([^()]+)", char)
    return match.group(1).strip() if match else None