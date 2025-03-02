import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  constructor() {}

  async getVersion(): Promise<string> {
    try {
      const response = await axios.get(
        'https://localhost:7294/api/Home/version'
      );
      return response.data.version as string;
    } catch (error) {
      console.error('Error fetching version:', error);
      throw error;
    }
  }
}
