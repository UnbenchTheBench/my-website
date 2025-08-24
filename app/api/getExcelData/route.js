import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    // Get filepath from query parameters, default to the original path
    const { searchParams } = new URL(request.url);
    const filepath = searchParams.get('filepath');
    
    // Use absolute path from project root
    const filePath = path.join(process.cwd(), filepath);
    const fileBuffer = await fs.readFile(filePath);
    
    const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const projects = XLSX.utils.sheet_to_json(worksheet);
    
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error reading Excel file:', error);
    
    // Return sample data as fallback
    const fallbackProjects = [{
      error: error.message,
      hint: "Please check if the Excel file exists and has the correct format.",
    }
    ];
    
    return NextResponse.json(fallbackProjects);
  }
}
