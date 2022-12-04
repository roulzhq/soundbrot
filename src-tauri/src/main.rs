#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use serde::{Deserialize, Serialize};
use serde_json::Result;

#[derive(Serialize, Deserialize)]
pub struct SoundReq {
    name: String,
    data: String,
    size: u32,
    kind: String,
}

#[tauri::command]
fn ping() -> String {
    return "pong".to_string();
}

#[tauri::command]
fn upload(data: &str) -> String {
    let req: SoundReq = serde_json::from_str(data).expect("");
    println!("{}", req.name);
    return req.kind;
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![ping, upload])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
